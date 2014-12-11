from django.shortcuts import render
from teams.models import Team
from django.views.generic import ListView, UpdateView, DetailView

class TeamDetailView(DetailView):
    model = Team
    template_name = "teams/team_detail.html"
    