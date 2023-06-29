from rest_framework import generics
from .models import Book
from .serializers import BookSerializers
from django.db.models import Q 

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