from django.shortcuts import render

#homepage
def Amainpage(request):
    return render(request,'mainpage.html')
#Gamepage
def Gamepage(request):
    return render(request,'Gamepage.html')
#ADHDhelp
def ADHDhelp(request):
    return render(request,'ADHDhelp.html')
#FAQs
def FAQs(request):
    return render(request,'FAQs.html')
#ADHDtest
def ADHDtest(request):
    return render(request,'ADHDtest.html')
#GamingQandA
def GamingQandA(request):
    return render(request,'Gaming Q&A.html')
#focustoolkit
def focustoolkit(request):
    return render(request,'focus-toolkit.html')
#community-forums
def community_forum(request):
    return render(request,'community-forum.html')
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
#Puzzle
def GameC1(request):
    return render(request,'gameC1.html')    
def GameC2(request):
    return render(request,'gameC2.html')
def GameC3(request):
    return render(request,'gameC3.html')
def GameC4(request):
    return render(request,'gameC4.html')
#Shooter
def GameD1(request):
    return render(request,'gameD1.html')     
def GameD2(request):
    return render(request,'gameD2.html')                    