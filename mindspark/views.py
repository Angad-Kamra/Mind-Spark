from django.shortcuts import render

#homepage
def Amainpage(request):
    return render(request,'index.html')
#ADHDhelp
def ADHDhelp(request):
    return render(request,'Adhd help.html')
#community
def community(request):
    return render(request,'community.html')
#Adventure
def Game1(request):
    return render(request,'game1.html')
def Game2(request):
    return render(request,'game2.html')
def Game3(request):
    return render(request,'game3.html')
def Game4(request):
    return render(request,'game4.html')
#Arcade
def GameA1(request):
    return render(request,'gameA1.html')
def GameA2(request):
    return render(request,'gameA2.html')
#Platform
def GameB1(request):
    return render(request,'gameB1.html')
def GameB2(request):
    return render(request,'gameB2.html')
def GameB3(request):
    return render(request,'gameB3.html')
def GameB4(request):
    return render(request,'gameB4.html')            