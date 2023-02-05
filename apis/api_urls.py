from django.urls import path
from .api_views import RecipeAPIView, RecipeDetail

urlpatterns = [
    path("", RecipeAPIView.as_view(), name="recipe_list"),
    path("<int:pk>/", RecipeDetail.as_view(), name="recipe_detail")
]