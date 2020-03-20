<template>
	<div class="container">

		<header class="py-3">
			 <h1>TypeScript + Vue + WebPack Bootstrap Project</h1>
		</header>
		
		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a :class="{ 'nav-link' : true, active : page == 0 }" v-on:click="selectPage(0);">Page1</a>
			</li>
			<li class="nav-item">
				<a :class="{ 'nav-link' : true, active : page == 1 }" v-on:click="selectPage(1);">Page2</a>
			</li>
			<li class="nav-item">
				<a :class="{ 'nav-link' : true, active : page == 2 }" v-on:click="selectPage(2);">Page3</a>
			</li>
			<li class="nav-item">
				<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
			</li>
		</ul>
			
		<div class="content" v-html="body"></div>

	</div>
	

</template>

<script lang="ts" src="./ApplicationContainer.ts"></script>
