document?.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('current-year').textContent =
    new Date().getFullYear();

  // Navigation button event listeners
  document.getElementById('go-to-quiz-btn')?.addEventListener('click', () => {
    window.location.href = 'quiz-settings.html';
  });
  document.getElementById('go-to-notes-btn')?.addEventListener('click', () => {
    window.location.href = 'notes.html';
  });
  document
    .getElementById('go-to-analysis-btn')
    ?.addEventListener('click', () => {
      window.location.href = 'analysis.html';
    });
  document
    .getElementById('go-to-settings-btn')
    ?.addEventListener('click', () => {
      window.location.href = 'settings.html';
    });
  document.getElementById('get-started-btn')?.addEventListener('click', () => {
    window.location.href = 'guide.html';
  });
  document.getElementById('learn-more-btn')?.addEventListener('click', () => {
    alert('Visit our guide page for detailed instructions!');
  });

  // Floating Chatbot functionality
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotInput = document.getElementById('chatbot-input');

  chatbotToggle?.addEventListener('click', () => {
    chatbotWindow.style.display =
      chatbotWindow.style.display === 'block' ? 'none' : 'block';
  });

  chatbotSend?.addEventListener('click', () => {
    const message = chatbotInput.value.trim();
    if (message) {
      // Here you could implement sending to an AI agent; for now we show an alert.
      alert('Message sent: ' + message);
      chatbotInput.value = '';
    }
  });
});

// Show or hide elements based on login status
const isLoggedIn = localStorage.getItem('geminiApiKey') !== null;

document.querySelectorAll('.show-on-login').forEach((el) => {
  if (isLoggedIn) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
});

document.querySelectorAll('.show-on-logout').forEach((el) => {
  if (isLoggedIn) {
    el.classList.add('hidden');
  } else {
    el.classList.remove('hidden');
  }
});

//

// Additional homepage-specific JS (already isolated in homepage.js in common use)
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navigation button event listeners
document.getElementById('go-to-quiz-btn')?.addEventListener('click', () => {
  window.location.href = 'quiz-settings.html';
});
document.getElementById('go-to-notes-btn')?.addEventListener('click', () => {
  window.location.href = 'notes.html';
});
document.getElementById('go-to-analysis-btn')?.addEventListener('click', () => {
  window.location.href = 'analysis.html';
});
document.getElementById('go-to-settings-btn')?.addEventListener('click', () => {
  window.location.href = 'settings.html';
});
// Hamburger menu toggle (for larger screens fallback)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger?.addEventListener('click', () => {
  // For mobile, open the full-screen nav instead
  document.getElementById('mobile-nav').classList.add('active');
  document.body.classList.add('no-scroll');
});
// Floating Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotInput = document.getElementById('chatbot-input');

chatbotToggle?.addEventListener('click', () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === 'block' ? 'none' : 'block';
});

chatbotSend?.addEventListener('click', () => {
  const message = chatbotInput.value.trim();
  if (message) {
    alert('Message sent: ' + message);
    chatbotInput.value = '';
  }
});

// Close chatbot when clicking outside
document?.addEventListener('click', (event) => {
  if (
    chatbotWindow.style.display === 'block' &&
    !chatbotWindow.contains(event.target) &&
    !chatbotToggle.contains(event.target)
  ) {
    chatbotWindow.style.display = 'none';
  }
});

// Ensure chatbot closes when toggled and user clicks outside
document?.addEventListener('click', (event) => {
  if (
    chatbotWindow.style.display === 'block' &&
    !chatbotWindow.contains(event.target) &&
    !chatbotToggle.contains(event.target)
  ) {
    chatbotWindow.style.display = 'none';
  }
});

// Mobile Navigation: close button handler
document.getElementById('mobile-nav-close')?.addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.remove('active');
  document.body.classList.remove('no-scroll');
});
