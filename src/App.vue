<script>
import { getAnnouncements } from './utils/dataUtils';
import Header from './components/Header.vue';
import Announcement from './components/Announcement.vue';

export default {
  components: {
    Header,
    Announcement
  },
  data() {
    return {
      announcements: []
    }
  },
  methods: {
    async fetchAnnouncements() {
      const announcements = await getAnnouncements();
      this.announcements = announcements;
    }
  },
  mounted() {
    this.fetchAnnouncements();
  }
}
</script>

<template>
  <div class="items-center flex flex-wrap">
    <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
      <div class="pr-12">
        <Header primary="Stienka" secondary="caffee" />
        <Announcement v-for="a in announcements" :key="a._id" :title="a.title" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
