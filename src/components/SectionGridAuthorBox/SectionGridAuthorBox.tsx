import { FragmentType } from '@/__generated__'
import CardAuthorBox from '@/components/CardAuthorBox/CardAuthorBox'
import { NC_USER_FULL_FIELDS_FRAGMENT } from '@/fragments'
import { FC } from 'react'

export interface SectionGridAuthorBoxProps {
	className?: string
	authors: FragmentType<typeof NC_USER_FULL_FIELDS_FRAGMENT>[]
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
	className = '',
	authors,
}) => {
	return (
		<div className={`nc-SectionGridAuthorBox relative ${className}`}>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
				{/* {authors.map(author => (
					<CardAuthorBox
						// @ts-ignore
						key={author.databaseId}
						author={author}
					/>
				))} */}
			</div>
		</div>
	)
}

export default SectionGridAuthorBox
