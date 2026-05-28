import Project.IsOdd.Spec

namespace Project.IsOdd.Proof

open Wasm Project.IsOdd Project.IsOdd.Spec

theorem is_odd_spec : IsOddSpec := by
  intro initial n
  apply TerminatesWith.of_wp_entry_wat
    (f := ⟨[.i32], [], func0, some [.i32]⟩) rfl rfl
  unfold func0
  wp_run
  simp [UInt32.and_comm]

end Project.IsOdd.Proof
