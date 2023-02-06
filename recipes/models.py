from django.db import models


class CategoryModel(models.Model):
    # categories of food
    CHOISES = [
        ("SOUP", "Soup"),
        ("PORRIDGE", "Porridge"),
        ("DESERT", "Deserts"),
        ("DRINKS", "Bewerages"),
    ]

    recipe_category = models.CharField(
        max_length=255,
        choices=CHOISES,
        unique=True,
    )

    def __str__(self):
        return self.recipe_category


class Recipe(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()
    author = models.CharField(max_length=100)
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)

    # display title in the admin
    def __str__(self):
        return self.title
