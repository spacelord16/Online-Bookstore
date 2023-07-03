from rest_framework import generics
from .models import Book, Cart, Order
from .serializers import BookSerializers, CartSerializers, OrderSerializers
from django.db.models import Q 
from django.core.paginator import Paginator
from rest_framework.decorators import api_view
from rest_framework.response import Response


class BookListAPIView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializers
    
class BookDetailAPIView(generics.RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializers
    
class BookSearchAPIView(generics.ListAPIView):
    serializer_class = BookSerializers
    
    def get_query(self):
        query = self.request.query_params.get('q')  
        if query:
            return Book.objects.filter(
                Q(title__icontains=query) |
                Q(author__icontains=query) |
                Q(genre__icontains=query)
            )
        else:
            return Book.objects.all()

class BookCreateAPIView(generics.CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializers

class BookFilterAPIView(generics.ListAPIView):
    serializer_class = BookSerializers
    
    def get_queryset(self):
        genre = self.request.query_params.get('genre')
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        
        queryset = Book.objects.all()
        
        if genre:
            queryset = queryset.filter(genre=genre)
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        # Add other filter conditions
        
        return queryset

class CartListAPIView(generics.ListAPIView):
    serializer_class = CartSerializers
    
    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
class CartDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CartSerializers
    
    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)

class OrderListAPIView(generics.ListAPIView):
    serializer_class = OrderSerializers
    
    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user=user)

class OrderDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializers
    
    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user=user)
    
@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    paginator = Paginator(books, request.GET.get('pageSize', 10))
    page_number = request.GET.get('page', 1)
    page = paginator.get_page(page_number)
    serializer = BookSerializers(page, many=True)
    return Response(serializer.data)