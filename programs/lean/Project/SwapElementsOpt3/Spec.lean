import Project.SwapElementsOpt3.Program

/-!
# Specification for `swap_elements_opt3`
-/

namespace Project.SwapElementsOpt3.Spec

open Wasm

/-- TODO: state and prove the behaviour of the wasm export `swap_elements_opt3`.

Informal spec:
Describe what `swap_elements_opt3` computes here, then replace `True` with a
`TerminatesWith` / `PartiallyMeets` statement over `«module»` (the decoded
program emitted into `Program.lean`). -/
@[spec_of "rust-exported" "swap_elements_opt3::swap_elements_opt3"]
def SwapElementsOpt3Spec : Prop :=
  True

end Project.SwapElementsOpt3.Spec
