<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'https://cdn.pika.dev/vue@^2.6.11';

export default class App extends Vue {
	title: string;
	constructor() {
	  super();
	  this.title = 'My vue landing page';
	}
	}
</script>
