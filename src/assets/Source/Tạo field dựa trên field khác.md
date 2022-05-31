Tạo file dựa trên một field khác trong MongoDB.

```go
/**
 * newField: The new field name.
 * expression: The new field expression.
 */
{
  date_range: {
    "$let": {
      "vars": {
        "seven_day_ago": {
          "$subtract": [
            "$$NOW",
            100 * 24 * 60 * 60 * 1000
          ]
        }
      },
      "in": {
        "start": {
          "$dateFromParts": {
            "year": {"$year": "$$seven_day_ago"},
            "month": {"$month": "$$seven_day_ago"},
            "day": {"$dayOfMonth": "$$seven_day_ago"}
          }
        },
        "end": {
          "$dateFromParts": {
            "year": {"$year": "$$seven_day_ago"},
            "month": {"$month": "$$seven_day_ago"},
            "day": {"$dayOfMonth": "$$seven_day_ago"},
            "hour":        23,
    				"minute":      59,
    				"second":      59,
    				"millisecond": 999
          }
        }
      }
    }
  }
}
```