from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()    
    author = models.CharField(max_length=100)
    
    # categories of food
    CATEGORY_OF_FOOD_OR_DRINK = [
        ("SOUP", 'Soup'),
        ("PORRIDGE", 'Porridge'),
        ("DESERT", 'Deserts'),
        ("DRINKS", 'Bewerages'),
    ]
    category_of_food_or_drinks = models.CharField(
        max_length=20,
        choices=CATEGORY_OF_FOOD_OR_DRINK,
        default="SOUP",
        )

    # display title in the admin
    def __str__(self):
        return self.title
