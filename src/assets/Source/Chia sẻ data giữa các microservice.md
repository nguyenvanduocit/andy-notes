Bài viết đề cấp tới 3 cách share data giữa các micro service

1.  Synchronous: Gọi service trực tiếp để lấy data.
2.  Asynchronous: Dựa vào event drivent
3.  Hybrid: Dựa vào event và có database riêng.

Ngoài ra còn một cách nữa, mà mình gọi là [[Share database giữa các service]]. Đây là database có thể chia sẻ giữa các service. Cần một contract giữa các service. Xem nó như là output của service.

## References

1. [Sharing Data Between Microservices in Scale | Fiverr Tech](https://medium.com/fiverr-engineering/how-to-share-data-between-microservices-on-high-scale-ab2bc663898d)