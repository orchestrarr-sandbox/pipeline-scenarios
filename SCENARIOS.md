# Scenarios

| # | What is wrong | Where | A good fix |
|---|---|---|---|
| P1 | **A flaky test**: fails about one run in three because of an unseeded random value | `p1-flaky/` | Seed it or remove the dependence; never retry until green |
| P2 | **An action pinned to a version that does not exist** | `.github/workflows/p2-missing-action.yml` | The current major version of the action |
| P3 | **A step that needs a secret that is not set** | `.github/workflows/p3-missing-secret.yml` | Make the step conditional on the secret, or remove the need; never invent a secret |
| P4 | **A matrix with an end-of-life Node** whose runtime lacks an API the test uses | `p4-matrix/` | Drop the end-of-life version from the matrix |
| P5 | **A deployment whose smoke test fails**: the container starts and answers `500` on `/health` | `p5-deploy/` | Fix the application; the smoke test stays |
| P6 | **A job that outlives its timeout** | `p6-timeout/` | Remove the needless wait; do not just raise the timeout |
| P7 | **A required check that never runs** (a path filter that excludes the files that change) | `.github/workflows/p7-skipped-check.yml` | Fix the filter |
