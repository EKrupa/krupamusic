from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

# Create your views here.
def home(request):
    return render(request, 'home.html')


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your message was sent successfully!")
            return redirect('home')
            
        
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})

def albums(request):
    return render(request, 'albums.html')