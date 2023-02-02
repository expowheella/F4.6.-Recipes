from django.test import TestCase
from django.urls import reverse
from .models import Recipe


class RecipesTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.recipe = Recipe.objects.create(
            title="A good recipe",
            content="An excellent content",
            author="Tom Christie",
        )

    def test_recipe_content(self):
        self.assertEqual(self.recipe.title, "A good recipe")
        self.assertEqual(self.recipe.content, "An excellent content")
        self.assertEqual(self.recipe.author, "Tom Christie")

    def test_recipe_listview(self):
        response = self.client.get(reverse("home"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "excellent content")
        self.assertTemplateUsed(response, "recipes/recipe_list.html")
