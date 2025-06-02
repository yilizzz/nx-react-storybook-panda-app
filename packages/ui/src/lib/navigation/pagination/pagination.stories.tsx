import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';
import { pagination } from '@styled-system/ui/recipes';
import { useState } from 'react';
const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Navigation/Pagination',
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const paginationDefault: Story = {
  args: pagination.raw({}),
  render: (args) => {
    const [page, setPage] = useState(6);

    return (
      <Pagination
        {...args}
        count={50}
        pageSize={10}
        siblingCount={5}
        currentPage={page}
        onPageChange={setPage}
      ></Pagination>
    );
  },
};
