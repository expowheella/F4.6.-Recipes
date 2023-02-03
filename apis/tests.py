from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from recipes.models import Recipe
import json



# Create your tests here.
class APITests(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.recipe = Recipe.objects.create(
            title = "Django for APIs",
            content = "Build Web API with python and DRF",
            author = "Sir Bulat Iakhin"
        )

    def test_api_listview(self):
        response = self.client.get(reverse("recipe_list"), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Recipe.objects.count(), 1)

        response = json.loads(response.content)[0]["title"]
        self.assertEqual(response, self.recipe.title)