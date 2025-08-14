// Album modal: show more info and streaming links when clicking album cover

document.addEventListener('DOMContentLoaded', function() {
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'album-modal';
    modal.style.display = 'none';
    modal.innerHTML = `
      <div class="album-modal-content">
        <span class="album-modal-close">&times;</span>
        <div class="album-modal-body"></div>
      </div>
    `;
    document.body.appendChild(modal);

    // Modal close logic
    modal.querySelector('.album-modal-close').onclick = function() {
      modal.style.display = 'none';
      modal.querySelector('.album-modal-body').innerHTML = '';
    };
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        modal.querySelector('.album-modal-body').innerHTML = '';
      }
    };

    // Album covers
    const covers = document.querySelectorAll('.album-cover-img');
    covers.forEach(function(img) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        // Get album info
        const albumSection = img.closest('.album');
        const title = albumSection.querySelector('.album-title').textContent;
        const desc = albumSection.querySelector('.album-description').textContent;
        const links = albumSection.querySelector('.album-links');
        // Modal content
        modal.querySelector('.album-modal-body').innerHTML = `
          <h2 style="text-align:center;">${title}</h2>
          <img src="${img.src}" alt="Album Cover" style="display:block;margin:0 auto 1rem auto;width:220px;height:220px;object-fit:cover;border-radius:1.2rem;box-shadow:0 4px 24px #23294633;">
          <p style="text-align:center;">${desc}</p>
          ${links ? `<div style='text-align:center;'>${links.innerHTML}</div>` : ''}
        `;
        modal.style.display = 'block';
      });
    });
});
