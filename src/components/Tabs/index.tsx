import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TabType, updateCurrentTab } from "../../store/reducers/tabsSlice";
import { Tab, TabsContainer } from "./Tabs.styles";

type Props = {
  tabs?: TabType[];
};

export const Tabs = ({ tabs }: Props) => {
  const dispatch = useAppDispatch();

  const currentTab = useAppSelector(({ tabs: { currentTab } }) => currentTab);

  return (
    <TabsContainer>
      {tabs?.map(({ tabName, tabId }) => (
        <Tab
          $isActive={tabId === currentTab}
          key={tabId}
          onClick={() => dispatch(updateCurrentTab(tabId))}
        >
          {tabName}
        </Tab>
      ))}
    </TabsContainer>
  );
};
