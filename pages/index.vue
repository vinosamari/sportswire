<template>
  <div class="wrapper">
    <h1 class="header">Welcome to SportsWire!</h1>
    <h2 class="subheader">Your Up-to-date Sports News and Analysis App.</h2>
    <section class="card" v-for="news in dummyData" :key="news.imgUrl">
      <img :src="news.imgUrl" :alt="news.source" class="avatar" />
      <h1 class="header">{{ news.headline }}</h1>
      <h2 class="subheader">Source: {{ news.source }}</h2>
      <p class="content">{{ news.body }}</p>
      <button class="btn">Read Full Article</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      dummyData: [
        {
          headline: "Someone said something",
          source: "He",
          body: "Someone said something that sparked a flurry of excitement and anticipation among a small group of enthusiasts yesterday. The comment, which was made during an obscure online forum discussion, hinted at the possibility of a major breakthrough in a long-standing scientific mystery.Many experts in the field were quick to jump on the news, speculating on what the breakthrough could mean for the future of their discipline. The media also picked up on the story, with various outlets running headlines proclaiming the imminent discovery of something groundbreaking.However, as the hours turned into days, it became clear that there was no substance behind the original comment. In fact, the person who made the statement later admitted that it was nothing more than a passing thought that they had shared in the heat of the moment.The disappointment was palpable among the community that had been so excited just a few days earlier. Some criticized the media for running with a story without verifying its authenticity, while others expressed frustration at the person who had made the comment in the first place.Ultimately, though, the episode served as a reminder of the dangers of speculation and hype in the world of science.",
          imgUrl:
            "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          headline: "Something was said somewhere",
          source: "She",
          body: "Something was said somewhere that has left many people scratching their heads and wondering what it could mean. The comment, which was reportedly made by a high-ranking government official during a closed-door meeting, has been the subject of intense speculation in political circles.Some have interpreted the remark as a sign that major policy changes are on the horizon, while others believe it could be a coded message to a foreign government. There are even those who think the comment was simply a slip of the tongue and should not be taken seriously.Despite the rampant speculation, no one seems to have a clear idea of what the comment was actually referring to. The government official who made the remark has not commented publicly on the matter, and it is unclear whether they will do so in the future.",
          imgUrl:
            "https://images.pexels.com/photos/4969845/pexels-photo-4969845.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          headline: "Somehow, somewhere, something happened",
          source: "They",
          body: "Somehow, somewhere, something happened that has left experts in a state of confusion and bewilderment. The incident, which appears to have taken place in a remote corner of the world, involves a mysterious phenomenon that defies explanation.According to their report, a strange energy field appeared out of nowhere, hovering above the ice and snow for several hours before disappearing just as suddenly. The field appeared to be emitting a high-frequency signal that could not be detected by any of the instruments the researchers had brought with them.",
          imgUrl:
            "https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
    };
  },
};
</script>
<style scoped>
.wrapper {
  @apply container tracking-wider text-center p-2 mx-auto;
}
.header {
  font-family: "Barlow", sans-serif;
  @apply font-bold text-4xl rounded-3xl shadow-xl  my-10 p-5;
}
.subheader {
  font-family: "Ubuntu", sans-serif;
  @apply text-xl font-bold tracking-wider;
}
.avatar {
  @apply rounded-full w-24 h-24 object-cover;
}
.card {
  @apply shadow-sm hover:shadow-xl transform transition-all duration-300 ease-in-out rounded w-5/6 my-8 text-left py-5 px-3 mx-auto cursor-pointer hover:bg-purple-300 hover:scale-105 hover:text-white;
}
.card .header {
  font-family: "Ubuntu", sans-serif;
  @apply my-1 rounded-sm text-2xl shadow-none p-0;
}
.card .subheader {
  @apply text-xs;
}
.content {
  @apply my-5 text-xs;
}
.btn {
  @apply bg-purple-600 text-white uppercase font-bold tracking-wider rounded-md m-3 px-6 py-2 text-sm;
}
</style>
