import { TCategoryCardFull } from "@/components/CardCategory1/CardCategory1";
import WidgetAddSubscriberForm from "@/components/WidgetAddSubscriberForm/WidgetAddSubscriberForm";
import WidgetCategories from "@/components/WidgetCategories/WidgetCategories";
import WidgetSocialsFollow from "@/components/WidgetSocialsFollow/WidgetSocialsFollow";
import React, { FC } from "react";
import WidgetSummary from "@/components/WidgetSummary/WidgetSummary";
import {GetPostSiglePageQuery} from "@/__generated__/graphql";
import {getPostDataFromPostFragment} from "@/utils/getPostDataFromPostFragment";

export interface SidebarProps {
  className?: string;
  categories: TCategoryCardFull[] | null;
  post: GetPostSiglePageQuery['post'];
}

export const Sidebar: FC<SidebarProps> = ({
  className = "space-y-6 ",
  categories,
  post
}) => {
    const {
        content
    } = getPostDataFromPostFragment(post || {})

  return (
    <div className={`nc-SingleSidebar ${className}`}>
        <WidgetSummary blogPost={content} />
        <WidgetSocialsFollow />
        <WidgetCategories categories={categories || []} />
        <WidgetAddSubscriberForm />
    </div>
  );
};
