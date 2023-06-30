from django.urls import path
from .views import BookListAPIView, BookDetailAPIView, BookFilterAPIView, CartListAPIView, CartDetailAPIView, OrderDetailAPIView, OrderListAPIView

urlpatterns = [
    path('books/', BookListAPIView.as_view(), name='book-list'),
    path('books/<int:pk>', BookDetailAPIView.as_view(), name='book-detail'),
    path('books/search/', BookListAPIView.as_view(), name='book-search'),
    path('books/filter/', BookFilterAPIView.as_view(), name='book-filter'),
    path('carts/', CartDetailAPIView.as_view(), name='cart-list'),
    path('cart/<int:pk>', CartDetailAPIView.as_view(), name='cart-detail'),
    path('orders/', OrderListAPIView.as_view(), name='order-list'),
    path('order/<int:pk>', OrderDetailAPIView.as_view(), name='order-detail'),
]