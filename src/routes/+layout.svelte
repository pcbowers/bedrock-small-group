<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="prose contents">
	{@render children()}
</div>
