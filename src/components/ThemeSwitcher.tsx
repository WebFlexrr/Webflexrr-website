import { useTheme } from "next-themes";
import { FaRegSun } from "react-icons/fa";
import { LuCloudMoon } from "react-icons/lu";

export const ThemeSwitcher = (): JSX.Element => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			{theme === "dark" ? (
				<button
					className="rounded-full border p-2 text-xl text-white drop-shadow-2xl dark:text-black"
					onClick={() => {
						setTheme("light");
					}}
				>
					<FaRegSun />
				</button>
			) : (
				<button
					className="rounded-full border p-2 text-xl text-black drop-shadow-2xl dark:text-black"
					onClick={() => {
						setTheme("dark");
					}}
				>
					<LuCloudMoon />
				</button>
			)}
		</div>
	);
};
