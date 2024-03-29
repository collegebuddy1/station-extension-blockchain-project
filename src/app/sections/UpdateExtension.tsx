import classNames from "classnames"
import { EXTENSION } from "config/constants"
import styles from "./UpdateExtension.module.scss"

const cx = classNames.bind(styles)

const UpdateExtension = () => {
  if (window.isTerraExtensionAvailable && !window.isStationExtensionAvailable)
    return (
      <div className={cx(styles.text, styles.info)}>
        Please{" "}
        <a href={EXTENSION} target="_blank" rel="noreferrer">
          update
        </a>{" "}
        your version of Station Extension.
      </div>
    )

  return null
}

export default UpdateExtension
