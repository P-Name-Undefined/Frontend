import React from 'react';
import { Text, View } from 'react-native';
import { CircleBadge } from '../../atoms/CircleBadge/CircleBadge';
import tw from '../../../utils/tailwind';

export const BadgeCard = ({
      badgeTemplate,
      showLevel = false,
      hidden = false,
  }) => {
    const getTitle = () => {
        return `${badgeTemplate.name.split(' ')[0]} ${badgeTemplate.rank}`;
    };

    const title = showLevel ? `Nível ${badgeTemplate.rank}` : getTitle();

    const hiddenBadgeInfo = {
        iconName: 'help',
        description: '-',
        neededValue: '?',
        rank: badgeTemplate.rank,
    };
    const badgeInfo = hidden ? hiddenBadgeInfo : badgeTemplate;

    return (
        <View
            style={tw.style('rounded-md p-4 bg-white items-center w-36 mx-2 h-48 justify-around', {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.6,
                shadowRadius: 15,
                elevation: 6,
            })}
        >
            <CircleBadge
                badgeIcon={badgeInfo.iconName}
                rank={badgeTemplate.rank}
                isHidden={hidden}
            />
            <View>
                <Text
                    style={tw`font-ms-bold text-sm text-black text-center`}
                    numberOfLines={1}
                >
                    {title}
                </Text>
                <Text
                    style={tw`font-ms-regular text-xs text-black text-center w-32`}
                    numberOfLines={2}
                >
                    {badgeInfo.description}
                </Text>
            </View>
            <Text style={tw`font-ms-bold text-sm text-primary`}>
                {badgeInfo.neededValue}/{badgeInfo.neededValue}
            </Text>
        </View>
    );
};
