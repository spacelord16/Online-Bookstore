from rest_framework import serializers
from .models import Book, Cart, Order

class BookSerializers(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class CartSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        
class OrderSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Order
        fields = '__all__'