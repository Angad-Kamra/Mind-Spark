"""
URL configuration for mindspark project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mindspark import views
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.Amainpage , name="Amainpage"),

    path('ADHDhelp/', views.ADHDhelp , name="ADHDhelp"),

    path('Community/', views.community , name="community"),
    
    path('game1/', views.Game1 , name="game1"),
    path('game2/', views.Game2 , name="game2"),
    path('game3/', views.Game3 , name="game3"),
    path('game4/', views.Game4 , name="game4"),
    
    path('gameA1/', views.GameA1 , name="gameA1"),
    path('gameA2/', views.GameA2 , name="gameA2"),

    path('gameB1/', views.GameB1 , name="gameB1"),
    path('gameB2/', views.GameB2 , name="gameB2"),
    path('gameB3/', views.GameB3 , name="gameB3"),
    path('gameB4/', views.GameB4 , name="gameB4"),
]
