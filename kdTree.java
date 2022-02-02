public class kdTree {
	int dimensions = 2;
	Node root;
	
	public kdTree() {}
	
	private Node insertNode(Node currentNode, double latitude, double longitude, int depth) {
		if (currentNode == null) {
			return new Node(latitude, longitude);
		}
		
		int cd = depth % dimensions;
		double point[] = new double[] {latitude, longitude};
		
		if (point[cd] < currentNode.point[cd]) {
			currentNode.left = insertNode(currentNode.left, latitude, longitude, depth+1);
		}
		else {
			currentNode.right = insertNode(currentNode.right, latitude, longitude, depth+1);
		}
		
		return currentNode;
	}
	
	public void insert(double latitude, double longitude) {
		root = insertNode(root, latitude, longitude, 0);
	}
}

class Node {
	double point[];
	Node left, right;
	
	Node(double latitude, double longitude) {
		point = new double[2];
		point[0] = latitude;
		point[1] = longitude;
	}
}