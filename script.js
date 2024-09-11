document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các phần tử có class "memory"
    const memories = document.querySelectorAll('.memory');
    
    // Thêm sự kiện click cho từng kỷ niệm
    memories.forEach(memory => {
        memory.addEventListener('click', function() {
            // Lấy id của phần tử ảnh tương ứng
            const memoryId = memory.getAttribute('data-id');
            const imagesDiv = document.getElementById(`memory${memoryId}`);

            // Toggle (hiển thị hoặc ẩn) phần ảnh
            if (imagesDiv.classList.contains('hidden')) {
                imagesDiv.classList.remove('hidden');
            } else {
                imagesDiv.classList.add('hidden');
            }
        });
    });
});
