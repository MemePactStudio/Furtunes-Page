document.getElementById('getFortune').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    const fortuneMessages = [
        "Great fortune is coming your way!",
        "Be cautious in your investments.",
        "Luck favors the bold, but not the reckless.",
        "A rise in value is in your near future.",
        "Unexpected gains will find you soon.",
        "Great fortune is within your grasp.",
        "Success is inevitable for you.",
        "Your future is filled with golden opportunities.",
        "A positive change is in your future.",
        "Luck smiles on those who dare to dream.",
        "Unexpected blessings are on their way.",
        "Prosperity is in your near future.",
        "Your hard work will soon pay off.",
        "Opportunities will arise from unexpected places.",
        "A new path is opening before you.",
        "Your talents will lead to great rewards.",
        "A surprise windfall is coming your way.",
        "Fortune favors the bold—take a leap!",
        "Good news is on the horizon.",
        "Your positive energy attracts abundance.",
        "Success is just around the corner.",
        "Your future is brighter than you think.",
        "Believe in your luck, and it will find you.",
        "An exciting opportunity is on its way.",
        "Happiness and wealth are within reach.",
        "Trust your instincts; they will guide you to fortune.",
        "Your efforts are leading to great rewards.",
        "Serendipity is about to strike.",
        "New beginnings bring prosperity.",
        "Your dreams are aligning with your destiny.",
        "A joyful surprise is heading your way.",
        "Abundance flows effortlessly into your life.",
        "Good things are coming, stay patient.",
        "Your persistence will be richly rewarded.",
        "An unexpected gift is coming your way.",
        "Luck is on your side; embrace it!",
        "The universe is aligning in your favor.",
        "Fortune smiles upon the brave.",
    ];
    const randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    document.getElementById('fortuneResult').textContent = `${userName}, ${randomFortune}`;
});
<script src="three.r134.min.js"></script>
<script src="vanta.birds.min.js"></script>
<script>
VANTA.BIRDS({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color1: 0xca145d,
  color2: 0x3cff,
  cohesion: 59.00,
  backgroundAlpha: 0.82
})
</script>
