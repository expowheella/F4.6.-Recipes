from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()    
    author = models.CharField(max_length=100)

    # display title in the admin
    def __str__(self):
        return self.title