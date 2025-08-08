function openAI(platform) {
  const query = encodeURIComponent("top achievement of isro");
  let url = "";

  switch (platform) {
    case 'chatgpt':
      url = `https://chat.openai.com/?q=${query}`;
      break;
    case 'google':
      url = `https://gemini.google.com/app/442ac17b8f074dcd?q=top%20achievement%20of%20isro`;
      break;
    case 'perplexity':
      url = `https://www.perplexity.ai/search?q=${query}`;
      break;
    case 'you':
      url = `https://you.com/search?q=${query}`;
      break;
    case 'claude':
      url = `https://claude.ai/new?q=${query}`;  // Claude doesn't support preload yet
      break;
    case 'grok':
      url = `https://grok.com/?q=${query}`; // Grok doesn't support preload yet
      break;
    default:
      return;
  }

  window.open(url, '_blank');
}

// // Close dropdown when returning to the page
// window.addEventListener('pageshow', function() {
//     const dropdown = document.querySelector('.content');
//     if (dropdown) {
//         // Temporarily disable pointer events to break the hover state
//         dropdown.style.pointerEvents = 'none';
        
//         // Re-enable after a brief moment
//         setTimeout(() => {
//             dropdown.style.pointerEvents = 'auto';
//         }, 1);
//     }
// });

// // Also handle when window regains focus (when you come back from another tab/window)
// window.addEventListener('focus', function() {
//     const dropdown = document.querySelector('.content');
//     if (dropdown) {
//         dropdown.style.pointerEvents = 'none';
//         setTimeout(() => {
//             dropdown.style.pointerEvents = 'auto';
//         }, 1);
//     }
// });


