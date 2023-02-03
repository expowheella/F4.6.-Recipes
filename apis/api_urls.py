from django.urls import path
from .api_views import RecipeAPIView

urlpatterns = [
    path("", RecipeAPIView.as_view(), name="recipe_list")
]