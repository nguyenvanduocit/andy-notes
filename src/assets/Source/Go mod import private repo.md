Setup Private trên máy cần get

```bash
set -x GOPRIVATE "pkg.trueprofit.goldencloud.dev/*,bitbucket.org/trueprofit/*"
git config --global url."git@bitbucket.org:".insteadOf "https://bitbucket.org/"
```