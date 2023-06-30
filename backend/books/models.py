from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='book_covers/')
    price = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.FloatField(default=0)
    genre = models.CharField(max_length=255)
    publication_date = models.DateField()
    
    def __str__(self):
        return self.title
    
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    books = models.ManyToManyField(Book, through='OrderItem')
    total_amount = models.DecimalField(max_digits=8, decimal_places=2)
    shipping_address = models.TextField()
    
    def __str__(self):
        return f"Order #{self.pk} by {self.user.username}"
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()