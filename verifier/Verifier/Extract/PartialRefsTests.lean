import Verifier.Extract.Lean

/-! Partial contracts retain their kind and resolve exports exactly like total
contracts; missing and cross-crate targets must still produce diagnostics. -/

namespace Verifier.Extract.PartialRefsTests

private def source := "@[spec_of \"rust-exported-partial\" \"rust_vec::vec_pop\",
  spec_of \"rust-internal-partial\" \"rust_vec::pop\"]
def PopSpec : Prop := True
"

private def scanned := LeanScan.scanFile "Spec.lean" source "rust_vec" ["vec_pop"]

example : (scanned.specs.toList.flatMap (·.refs)).map
    (fun r => (r.kind.toString, r.target, r.resolved)) =
    [("rust-exported-partial", "rust_vec::vec_pop", true),
     ("rust-internal-partial", "rust_vec::pop", false)] := by native_decide

example : scanned.diagnostics.any (·.kind == "malformed_spec_of_attribute") = false := by
  native_decide

example : (LeanScan.scanFile "Spec.lean" source "rust_vec" []).diagnostics.any
    (·.kind == "unresolved_spec_of_target") = true := by native_decide

example : (LeanScan.scanFile "Spec.lean" source "other_crate" []).diagnostics.any
    (·.kind == "cross_crate_reference") = true := by native_decide

end Verifier.Extract.PartialRefsTests
