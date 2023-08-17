// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const iconuser = (name) => <SvgColor src={`/assets/dashboard/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const icontown = (name) => <SvgColor src={`/assets/main_nav/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const iconpost = (name) => <SvgColor src={`/assets/others/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('icon_statistics'),
  },
  {
    title: 'Courses',
    path: '/dashboard/courses',
    icon: iconuser('icon_member'),
  },
  {
    title: 'In progress',
    path: '/dashboard/town',
    icon: icontown('icon_townportal'),
  },
  {
    title: 'Completed',
    path: '/dashboard/post',
    icon: iconpost('icon_historyandculture'),
  },
];

export default navConfig;
