MongoDB group by time with timezone

```go
startTimeID := bson.M{"date": "$created_at", "timezone": "Asia/Phnom_Penh"}
	endTimeID := bson.M{"date": "$created_at", "timezone": "Asia/Phnom_Penh"}

reportID := bson.M{
	"product_id": "$_id.product_id",
	"start_time": bson.M{
		"$dateFromParts": bson.M{
			"year":     bson.M{"$year": startTimeID},
			"month":    bson.M{"$month": startTimeID},
			"day":      bson.M{"$dayOfMonth": startTimeID},
			"timezone": "Asia/Phnom_Penh",
		},
	},
	"end_time": bson.M{
		"$dateFromParts": bson.M{
			"year":        bson.M{"$year": endTimeID},
			"month":       bson.M{"$month": endTimeID},
			"day":         bson.M{"$dayOfMonth": endTimeID},
			"hour":        23,
			"minute":      59,
			"second":      59,
			"millisecond": 999,
			"timezone":    "Asia/Phnom_Penh",
		},
	},
}
```