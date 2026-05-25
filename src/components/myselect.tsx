import * as Select from "@radix-ui/react-select";

export type MySelectEnum = {
	title: string;
	value: string;
}

interface MySelectProps {
	value: string;
	onValueChange: (arg: string) => void;
	data: MySelectEnum[];
}

function MySelect({
	value = "Value",
	onValueChange,
	data = []
}: MySelectProps) {

	return (
		<Select.Root
			value={value}
			onValueChange={onValueChange}
		>
			<Select.Trigger
				className="outline-solid outline-1 outline-[color-mix(in_srgb,transparent_75%,var(--color-text))]
				backdrop-blur-sm
				py-2 px-4
				text-sm
				rounded-xl cursor-pointer"
			>
				<Select.Value
					defaultValue={value}
					placeholder={value}
				/>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content
					className="z-1"
					position="popper"
					side="bottom"
					align="start"
					sideOffset={8}
				>
					<Select.Viewport
						className="rounded-xl p-1 bg-surface-primary shadow-xl"
					>
						{
							data.map((value: MySelectEnum, id: number) => (
								<Select.Item
									className="outline-none p-2 rounded-xl cursor-pointer
									transition-colors duration-100 hover:text-bg hover:bg-accent"
									key={id}
									value={value.value}
								>
									<Select.ItemText>
										{value.title}
									</Select.ItemText>
								</Select.Item>
							))
						}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	)
}

export default MySelect;