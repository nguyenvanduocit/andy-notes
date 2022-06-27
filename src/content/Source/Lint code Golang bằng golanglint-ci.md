## Config golanglint-ci

^47e735

Config file:

```yaml
run:  
  timeout: 10m  
  issues-exit-code: 1  
linters:  
  disable-all: true  
  enable:  
    - bodyclose  
    - errcheck  
    - govet  
    - staticcheck  
    - unused  
    - gosimple  
    - structcheck  
    - varcheck  
    - ineffassign  
    - deadcode  
    - typecheck  
    - gosec  
    - unconvert  
    - dupl  
    - goconst  
    - funlen  
    - gocognit  
    - goconst  
    - gocyclo  
    - misspell  
    - nestif  
    - nilerr  
    - nilnil  
    - nlreturn  
    - wrapcheck  
    - varnamelen  
    - wastedassign  
    - unconvert  
    - contextcheck  
    - depguard  
    - errorlint  
    - exportloopref  
linters-settings:  
  varnamelen:  
    ignore-names:  
      - err  
      - ok
```

Usage:

```bash
GOFLAGS='' golangci-lint run --new-from-rev=HEAD^1
```

## Related

1. [[../Source/Check commit bằng husky]]