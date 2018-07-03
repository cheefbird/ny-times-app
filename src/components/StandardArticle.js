import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function StandardArticle({
  title,
  subtitle,
  section,
  subsection,
  imageUri
}) {
  const sectionText = `${section}/${subsection}`;

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri:
            "https://static01.nyt.com/images/2018/07/03/us/politics/03dc-scotus/03dc-scotus-thumbStandard.jpg"
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.sectionText}>{sectionText}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
}

StandardArticle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  section: PropTypes.string,
  subsection: PropTypes.string,
  imageUri: PropTypes.string.isRequired
};

StandardArticle.defaultProps = {
  section: "",
  subsection: ""
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  thumbnail: {
    width: 75,
    height: 75
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  sectionText: {
    fontSize: 10,
    fontStyle: "italic"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8
  }
});
