<script lang="ts">
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes";
	import ReloadComponent from '@components/ReloadComponent.svelte'
</script>

<Router {routes} />
<ReloadComponent />


