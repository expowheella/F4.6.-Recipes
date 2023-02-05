from rest_framework import serializers
from recipes.models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = (
            "id",
            "title",
            "content",
            "author",
            "category_of_food_or_drinks"
        )
