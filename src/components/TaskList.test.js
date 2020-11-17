import PureTaskList from './PureTaskList.svelte';
import { withPinnedTasksData } from './PureTaskList.stories';
import { render } from '@testing-library/svelte';

test('TaskList', async () => {
    const { container } = await render(PureTaskList, {
        props: {
            tasks: withPinnedTasksData
        }
    });
    expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
})