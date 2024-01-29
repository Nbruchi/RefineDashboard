import DealsChart from "@/components/home/deals-chart";
import UpcomingEvents from "@/components/home/upcoming-events";
import UpcomingEventsSkeleton from "@/components/skeleton/upcoming-events";
import AccordionHeaderSkeleton from "./skeleton/accordion-header";
import KanbanColumnSkeleton from "@/components/skeleton/kanban";
import LatestActivitiesSkeleton from "@/components/skeleton/latest-activities";
import ProjectCardSkeleton from "@/components/skeleton/project-card";
import TotalCountCard from "./home/total-count-card";
import LatestActivities from "./home/latest-activities";
import { Text } from "@/components/text";
import { CustomAvatar } from "@/components/custom-avatar";
import { UserTag } from "./tags/user-tag";
import { TextIcon } from "./text-icon";

export {
    DealsChart,
    UpcomingEvents,
    UpcomingEventsSkeleton,
    AccordionHeaderSkeleton,
    KanbanColumnSkeleton,
    LatestActivitiesSkeleton,
    ProjectCardSkeleton,
    TotalCountCard,
    LatestActivities,
    Text,
    UserTag,
    TextIcon,
};

export * from "./tasks/form/description";
export * from "./tasks/form/due-date";
export * from "./tasks/form/stage";
export * from "./tasks/form/title";
export * from "./tasks/form/users";
export * from "./tasks/form/header";
export * from "./accordion/accordion";
export * from "./pagination-total";
export * from "./custom-avatar";
