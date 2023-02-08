from django.urls import path
from .api_views import RecipeAPIView, RecipeDetail, RecipeByCategoryDetail, RecipeByCategoryPorridge

urlpatterns = [
    path("", RecipeAPIView.as_view(), name="recipe_list"),
    path("<int:pk>/", RecipeDetail.as_view(), name="recipe_detail"),
    path("soup/" , RecipeByCategoryDetail.as_view(), name="soup"),
    path("porridge/", RecipeByCategoryPorridge.as_view(), name="porridge")
]