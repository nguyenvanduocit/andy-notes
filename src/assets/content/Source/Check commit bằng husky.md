```json
{
	"husky": {  
	  "hooks": {  
	    "pre-commit": "GOFLAGS='' golangci-lint run --new-from-rev=HEAD^1",  
	    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"  
	  }  
	}
}
```