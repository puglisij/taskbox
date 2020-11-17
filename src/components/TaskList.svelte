<script>
/*
    The reason to keep the presentational version of the TaskList separate is 
    because it is easier to test and isolate as it doesn't rely on the presence of a store.
*/
    import PureTaskList from './PureTaskList.svelte';
    import { taskStore } from '../store';
    function onPinTask(event) {
        taskStore.pinTask(event.detail.id);
    }
    function onArchiveTask(event) {
        taskStore.archiveTask(event.detail.id);
    }
</script>

<div>
    <PureTaskList
        tasks={$taskStore}
        on:onPinTask={onPinTask}
        on:onArchiveTask={onArchiveTask}
    />
</div>