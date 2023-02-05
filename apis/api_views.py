from rest_framework import generics

from recipes.models import Recipe
from .serializers import RecipeSerializer

# class RecipeAPIView(generics.ListAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer


class RecipeAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
